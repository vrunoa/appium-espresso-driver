/**
 * @typedef {Object} IdlingResourcesOptions
 */

/**
 * Registers one or more idling resources
 *
 * @this {import('../driver').EspressoDriver}
 * @see https://github.com/appium/appium-espresso-driver?tab=readme-ov-file#mobile-registeridlingresources
 * @param {string} classNames - The comma-separated list of idling resources class names.
 * Each name must be a full-qualified java class name, like `io.appium.espressoserver.lib.MyIdlingResource`.
 * Each class in the app source must implement a singleton pattern and have a static `getInstance()`
 * method returning the class instance, which implements `androidx.test.espresso.IdlingResource`
 * interface. Read
 * - https://developer.android.com/training/testing/espresso/idling-resource
 * - https://android.jlelse.eu/integrate-espresso-idling-resources-in-your-app-to-build-flexible-ui-tests-c779e24f5057
 * for more details on how to design and use idling resources concept in Espresso.
 * @throws {Error} If there was a failure while parsing options or registering
 * the actual instances
 */
export async function mobileRegisterIdlingResources (classNames) {
  return await this.espresso.jwproxy.command('/appium/execute_mobile/register_idling_resources', 'POST', {
    classNames,
  });
}

/**
 * Unregisters one or more idling resources
 *
 * @this {import('../driver').EspressoDriver}
 * @param {string} classNames - The comma-separated list of idling resources class names.
 * Each name must be a full-qualified java class name, like `io.appium.espressoserver.lib.MyIdlingResource`.
 * Each class in the app source must implement a singleton pattern and have a static `getInstance()`
 * method returning the class instance, which implements `androidx.test.espresso.IdlingResource`
 * interface. Read
 * - https://developer.android.com/training/testing/espresso/idling-resource
 * - https://android.jlelse.eu/integrate-espresso-idling-resources-in-your-app-to-build-flexible-ui-tests-c779e24f5057
 * for more details on how to design and use idling resources concept in Espresso.
 * @throws {Error} If there was a failure while parsing options or unregistering
 * the actual instances
 */
export async function mobileUnregisterIdlingResources (classNames) {
  return await this.espresso.jwproxy.command('/appium/execute_mobile/unregister_idling_resources', 'POST', {
    classNames
  });
}

/**
 * Returns a list of currently registered idling resources
 * or an empty list if no resources have been registered yet.
 *
 * @this {import('../driver').EspressoDriver}
 * @returns {Promise<string[]>} The list of fully qualified class names
 */
export async function mobileListIdlingResources () {
  return /** @type {string[]} */ (await this.espresso.jwproxy.command(
    '/appium/execute_mobile/list_idling_resources', 'GET'
  ));
}

/**
 * Wait for UI thread to be idle.
 * @this {import('../driver').EspressoDriver}
 */
export async function mobileWaitForUIThread () {
  return await this.espresso.jwproxy.command('/appium/execute_mobile/ui_thread_sync', 'POST');
}
