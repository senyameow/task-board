import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
    publicRoutes: ['/'],
    afterAuth(auth, req) {
        if (auth.userId && auth.isPublicRoute) {
            // если мы зареганы и мы на маркете, пусть нас сразу редиректит на страницу выбора организации
            let path = 'select-org'

            // если есть организация, то кинем на нее
            if (auth.orgId) {
                path = `organization/${auth.orgId}`
            }

            const newUrl = new URL(path, req.url)
            return NextResponse.redirect(newUrl)
        }

        // если юзер переходит по ссылке, но он не залогинен, то когда он залогинется, его кинет на тот юрл, куда он хотел
        // if (!auth.userId && !auth.isPublicRoute) {
        //     return redirectToSignIn({ returnBackUrl: req.url })
        // }

        if (auth.userId && !auth.orgId && !req.nextUrl.pathname.includes('select-org')) {
            const orgSelectionIfUserDontHaveOneButLoggenIn = new URL(`select-org`, req.url)
            return NextResponse.redirect(orgSelectionIfUserDontHaveOneButLoggenIn)
        }
    }
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
