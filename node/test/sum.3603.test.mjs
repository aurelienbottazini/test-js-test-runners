
import sum3603 from '../sum3603.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 48 to equal 123 + offset 0.7824746911218395', (t) => {
  assert.strictEqual(sum3603(75, 48), 123 + 0.7824746911218395);
});
