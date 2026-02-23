<<<<<<< HEAD
import { createSignal } from "solid-js";

import { Trans } from "@lingui-solid/solid/macro";
=======
import { createSignal, onMount } from "solid-js";

import { Trans, useLingui } from "@lingui-solid/solid/macro";
>>>>>>> addb6b7c84bf3852691f3311470e714bbe9b5522

import { CategoryButton, Checkbox, Column } from "@revolt/ui";
import { Symbol } from "@revolt/ui/components/utils/Symbol";

declare type DesktopConfig = {
  firstLaunch: boolean;
  customFrame: boolean;
  minimiseToTray: boolean;
  spellchecker: boolean;
  hardwareAcceleration: boolean;
  discordRpc: boolean;
  windowState: {
    isMaximised: boolean;
  };
};

declare global {
  interface Window {
    native: {
      versions: {
        node(): string;
        chrome(): string;
        electron(): string;
        desktop(): string;
      };
      minimise(): void;
      maximise(): void;
      close(): void;
    };

    desktopConfig: {
      get(): DesktopConfig;
      set(config: Partial<DesktopConfig>): void;
<<<<<<< HEAD
      getAutostart(): boolean;
      setAutostart(value: boolean): void;
=======
      getAutostart(): Promise<boolean>;
      setAutostart(value: boolean): Promise<boolean>;
>>>>>>> addb6b7c84bf3852691f3311470e714bbe9b5522
    };
  }
}

/**
 * Desktop Configuration Page
 */
export default function Native() {
<<<<<<< HEAD
  const [autostart, setAutostart] = createSignal(
    window.desktopConfig.getAutostart(),
  );
=======
  const { t } = useLingui();
  const [autostart, setAutostart] = createSignal(false);
>>>>>>> addb6b7c84bf3852691f3311470e714bbe9b5522
  const [config, setConfig] = createSignal(window.desktopConfig.get());

  function set(config: Partial<DesktopConfig>) {
    window.desktopConfig.set(config);
    setConfig((conf) => ({ ...conf, ...config }));
  }

<<<<<<< HEAD
=======
  onMount(async () => {
    const value = await window.desktopConfig.getAutostart();
    setAutostart(value);
  });

  async function toggleAutostart() {
    const newValue = !autostart();
    const savedValue = await window.desktopConfig.setAutostart(newValue);
    setAutostart(savedValue);
  }

  const toggles: Partial<Record<keyof DesktopConfig, () => void>> = {
    minimiseToTray: () => set({ minimiseToTray: !config().minimiseToTray }),
    customFrame: () => set({ customFrame: !config().customFrame }),
    discordRpc: () => set({ discordRpc: !config().discordRpc }),
    spellchecker: () => set({ spellchecker: !config().spellchecker }),
    hardwareAcceleration: () =>
      set({ hardwareAcceleration: !config().hardwareAcceleration }),
  };

  function CheckboxButton<K extends keyof DesktopConfig>(
    key: K,
    icon: string,
    label: string,
    description: string,
  ) {
    return (
      <CategoryButton
        action={
          <Checkbox
            checked={config()[key]}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              e.stopPropagation();
              toggles[key]!();
            }}
          />
        }
        onClick={toggles[key]}
        icon={<Symbol>{icon}</Symbol>}
        description={description}
      >
        {label}
      </CategoryButton>
    );
  }

>>>>>>> addb6b7c84bf3852691f3311470e714bbe9b5522
  return (
    <Column gap="lg">
      <CategoryButton.Group>
        <CategoryButton
<<<<<<< HEAD
          action={<Checkbox checked={autostart()} />}
          onClick={() =>
            setAutostart((value) => {
              window.desktopConfig.setAutostart(!value);
              return !value;
            })
          }
=======
          action={
            <Checkbox
              checked={autostart()}
              onClick={(e) => e.stopPropagation()}
              onChange={toggleAutostart}
            />
          }
          onClick={toggleAutostart}
>>>>>>> addb6b7c84bf3852691f3311470e714bbe9b5522
          icon={<Symbol>exit_to_app</Symbol>}
          description={
            <Trans>Launch Stoat when you log into your computer.</Trans>
          }
        >
          <Trans>Start with Computer</Trans>
        </CategoryButton>
<<<<<<< HEAD
        <CategoryButton
          action={<Checkbox checked={config().minimiseToTray} />}
          onClick={() =>
            set({
              minimiseToTray: !config().minimiseToTray,
            })
          }
          icon={<Symbol>cancel_presentation</Symbol>}
          description={
            <Trans>Instead of closing, Stoat will hide in your tray.</Trans>
          }
        >
          <Trans>Minimise to Tray</Trans>
        </CategoryButton>
        <CategoryButton
          action={<Checkbox checked={config().customFrame} />}
          onClick={() =>
            set({
              customFrame: !config().customFrame,
            })
          }
          icon={<Symbol>web_asset</Symbol>}
          description={<Trans>Let Stoat use its own custom titlebar.</Trans>}
        >
          <Trans>Custom window frame</Trans>
        </CategoryButton>
      </CategoryButton.Group>

      <CategoryButton.Group>
        <CategoryButton
          action={<Checkbox checked={config().discordRpc} />}
          onClick={() =>
            set({
              discordRpc: !config().discordRpc,
            })
          }
          icon={<Symbol>groups_2</Symbol>}
          description={<Trans>Rep Stoat using Discord rich presence.</Trans>}
        >
          <Trans>Discord RPC</Trans>
        </CategoryButton>
        <CategoryButton
          action={<Checkbox checked={config().spellchecker} />}
          onClick={() =>
            set({
              spellchecker: !config().spellchecker,
            })
          }
          icon={<Symbol>spellcheck</Symbol>}
          description={
            <Trans>Show corrections and suggestions as you type.</Trans>
          }
        >
          <Trans>Spellchecker</Trans>
        </CategoryButton>
        <CategoryButton
          action={<Checkbox checked={config().hardwareAcceleration} />}
          onClick={() =>
            set({
              hardwareAcceleration: !config().hardwareAcceleration,
            })
          }
          icon={<Symbol>speed</Symbol>}
          description={
            <Trans>Use the graphics card to improve performance.</Trans>
          }
        >
          <Trans>Hardware Acceleration</Trans>
        </CategoryButton>
=======
        {CheckboxButton(
          "minimiseToTray",
          "cancel_presentation",
          t`Minimise to Tray`,
          t`Instead of closing, Stoat will hide in your tray.`,
        )}
        {CheckboxButton(
          "customFrame",
          "web_asset",
          t`Custom window frame`,
          t`Let Stoat use its own custom titlebar.`,
        )}
      </CategoryButton.Group>

      <CategoryButton.Group>
        {CheckboxButton(
          "discordRpc",
          "groups_2",
          t`Discord RPC`,
          t`Rep Stoat using Discord rich presence.`,
        )}
        {CheckboxButton(
          "spellchecker",
          "spellcheck",
          t`Spellchecker`,
          t`Show corrections and suggestions as you type.`,
        )}
        {CheckboxButton(
          "hardwareAcceleration",
          "speed",
          t`Hardware Acceleration`,
          t`Use the graphics card to improve performance.`,
        )}
>>>>>>> addb6b7c84bf3852691f3311470e714bbe9b5522
      </CategoryButton.Group>

      <CategoryButton.Group>
        <CategoryButton
          icon={<Symbol>desktop_windows</Symbol>}
          description={
            <>
              <Trans>Version:</Trans> {window.native.versions.desktop()}
            </>
          }
        >
          <Trans>Stoat for Desktop</Trans>
        </CategoryButton>
      </CategoryButton.Group>
    </Column>
  );
}
