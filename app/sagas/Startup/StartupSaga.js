import { navigateAndReset } from 'app/services/navigation'

export function* startup() {
  // Add more operations you need to do at startup here
  // ...

  navigateAndReset('HomeScreen') // When those operations are finished we redirect to the main screen
}
