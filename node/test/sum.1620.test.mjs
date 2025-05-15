
import sum1620 from '../sum1620.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 0 to equal 72 + offset 0.33230363403687113', (t) => {
  assert.strictEqual(sum1620(72, 0), 72 + 0.33230363403687113);
});
