import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // Extract tenantId from request and set it in the request object
    req.tenantId = this.getTenantId(req);
    next();
  }

  private getTenantId(req: any): string | null {
    // Implement logic to extract tenantId from request
    // For example, you might extract it from headers, query parameters, or request body
    // Replace the following line with your actual logic

    // For demonstration, let's assume it's coming from a query parameter "tenantId"
    return req.query.tenantId || null;
  }
}
