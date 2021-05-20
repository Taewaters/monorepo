
OUTOFSESSION="$1/out-of-session"


echo "$OUTOFSESSION"

twilio api:proxy:v1:services:update \
    --sid KS5235eba90241399a186dfa32091ef10a \
    --out-of-session-callback-url $OUTOFSESSION
