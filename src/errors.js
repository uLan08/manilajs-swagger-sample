export function errorHandler() {
	return async (ctx, next) => {
		try {
			await next()
		} catch (err) {
			Object.assign(ctx, {
				body: {message: "Internal error"},
				status: err.status || 500
			})
			throw err
		}
		if (ctx.status === 404) {
			ctx.body = {message: "Not found"}
		}
	}
}