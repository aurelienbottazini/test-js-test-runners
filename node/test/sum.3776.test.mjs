
import sum3776 from '../sum3776.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 97 to equal 98 + offset 0.5341053550404331', (t) => {
  assert.strictEqual(sum3776(1, 97), 98 + 0.5341053550404331);
});
