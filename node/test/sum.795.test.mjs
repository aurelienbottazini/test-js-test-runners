
import sum795 from '../sum795.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 15 to equal 48 + offset 0.6370286779310597', (t) => {
  assert.strictEqual(sum795(33, 15), 48 + 0.6370286779310597);
});
