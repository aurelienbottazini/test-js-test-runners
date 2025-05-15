
import sum3462 from '../sum3462.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 5 to equal 24 + offset 0.2907957391018019', (t) => {
  assert.strictEqual(sum3462(19, 5), 24 + 0.2907957391018019);
});
