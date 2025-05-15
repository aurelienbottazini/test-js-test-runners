
import sum2753 from '../sum2753.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 78 to equal 93 + offset 0.7089955038837088', (t) => {
  assert.strictEqual(sum2753(15, 78), 93 + 0.7089955038837088);
});
