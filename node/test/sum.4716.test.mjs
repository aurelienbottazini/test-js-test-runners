
import sum4716 from '../sum4716.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 10 to equal 105 + offset 0.5001346380182499', (t) => {
  assert.strictEqual(sum4716(95, 10), 105 + 0.5001346380182499);
});
