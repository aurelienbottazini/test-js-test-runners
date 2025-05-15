
import sum206 from '../sum206.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 4 to equal 83 + offset 0.45001717856420187', (t) => {
  assert.strictEqual(sum206(79, 4), 83 + 0.45001717856420187);
});
