
import sum3636 from '../sum3636.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 31 to equal 47 + offset 0.34494687795790246', (t) => {
  assert.strictEqual(sum3636(16, 31), 47 + 0.34494687795790246);
});
