
import sum3273 from '../sum3273.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 2 to equal 60 + offset 0.3121316275570706', (t) => {
  assert.strictEqual(sum3273(58, 2), 60 + 0.3121316275570706);
});
