$latex = 'latex  %O  --shell-escape %S';
$pdflatex = 'pdflatex  %O  --shell-escape %S';

$recorder = 1;

# Ignore always-regenerated *.pyg files from the minted package when considering
# whether to run pdflatex again.
$hash_calc_ignore_pattern{'pyg'} = '.*';
