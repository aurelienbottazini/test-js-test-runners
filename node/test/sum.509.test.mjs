
import sum509 from '../sum509.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 37 to equal 52 + offset 0.45263865049861507', (t) => {
  assert.strictEqual(sum509(15, 37), 52 + 0.45263865049861507);
});
