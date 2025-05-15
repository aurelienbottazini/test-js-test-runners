
import sum1042 from '../sum1042.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 25 to equal 57 + offset 0.10461640821649121', (t) => {
  assert.strictEqual(sum1042(32, 25), 57 + 0.10461640821649121);
});
