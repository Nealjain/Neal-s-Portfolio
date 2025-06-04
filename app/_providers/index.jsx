import { BalancerProvider } from './balancer';
import { StyledComponentsRegistry } from './styled-components';
import { ScrollProvider } from './scroll';

/** @param {import('react').PropsWithChildren<unknown>} */
export function Providers({ children }) {
  return (
    <StyledComponentsRegistry>
      <BalancerProvider>
        <ScrollProvider>{children}</ScrollProvider>
      </BalancerProvider>
    </StyledComponentsRegistry>
  );
}
