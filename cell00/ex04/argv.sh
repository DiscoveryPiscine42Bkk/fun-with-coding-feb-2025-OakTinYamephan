if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # Loop through the first three arguments
    for arg in "${@:1:3}"; do
        echo "$arg"
    done
fi