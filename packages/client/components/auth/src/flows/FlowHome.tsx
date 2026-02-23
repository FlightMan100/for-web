import { Match, Show, Switch } from "solid-js";

import { Trans } from "@lingui-solid/solid/macro";
import { css } from "styled-system/css";

import { useClientLifecycle } from "@revolt/client";
import { TransitionType } from "@revolt/client/Controller";
import { Navigate } from "@revolt/routing";
import { Button, Column } from "@revolt/ui";

<<<<<<< HEAD
=======
import { useState } from "@revolt/state";
>>>>>>> addb6b7c84bf3852691f3311470e714bbe9b5522
import Wordmark from "../../../../public/assets/web/wordmark.svg?component-solid";

/**
 * Flow for logging into an account
 */
export default function FlowHome() {
<<<<<<< HEAD
=======
  const state = useState();
>>>>>>> addb6b7c84bf3852691f3311470e714bbe9b5522
  const { lifecycle, isLoggedIn, isError } = useClientLifecycle();

  return (
    <Switch
      fallback={
        <>
          <Show when={isLoggedIn()}>
<<<<<<< HEAD
            <Navigate href="/app" />
=======
            <Navigate href={state.layout.popNextPath() ?? "/app"} />
>>>>>>> addb6b7c84bf3852691f3311470e714bbe9b5522
          </Show>

          <Column gap="xl">
            <Wordmark
              class={css({
<<<<<<< HEAD
                width: "100%",
=======
                width: "60%",
                margin: "auto",
>>>>>>> addb6b7c84bf3852691f3311470e714bbe9b5522
                fill: "var(--md-sys-color-on-surface)",
              })}
            />

            <Column>
              <b
                style={{
                  "font-weight": 800,
                  "font-size": "1.4em",
                  display: "flex",
                  "flex-direction": "column",
                  "align-items": "center",
                  "text-align": "center",
                }}
              >
                <span>
                  <Trans>
                    Find your com
                    <wbr />
                    munity,
                    <br />
                    connect with the world.
                  </Trans>
                </span>
              </b>
              <span style={{ "text-align": "center", opacity: "0.5" }}>
<<<<<<< HEAD
                  OtisCord is one of the best ways to stay connected with your
                  friends and community, anywhere, anytime.
=======
                <Trans>
                  Stoat is one of the best ways to stay connected with your
                  friends and community, anywhere, anytime.
                </Trans>
>>>>>>> addb6b7c84bf3852691f3311470e714bbe9b5522
              </span>
            </Column>

            <Column>
              <a href="/login/auth">
                <Column>
                  <Button>
                    <Trans>Log In</Trans>
                  </Button>
                </Column>
              </a>
              <a href="/login/create">
                <Column>
                  <Button variant="tonal">
                    <Trans>Sign Up</Trans>
                  </Button>
                </Column>
              </a>
            </Column>
          </Column>
        </>
      }
    >
      <Match when={isError()}>
        <Switch fallback={"an unknown error occurred"}>
          <Match when={lifecycle.permanentError === "InvalidSession"}>
            <h1>
              <Trans>You were logged out!</Trans>
            </h1>
          </Match>
        </Switch>

        <Button
          variant="filled"
          onPress={() =>
            lifecycle.transition({
              type: TransitionType.Dismiss,
            })
          }
        >
          <Trans>OK</Trans>
        </Button>
      </Match>
    </Switch>
  );
}
