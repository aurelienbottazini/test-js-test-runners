
import sum3487 from '../sum3487.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 29 to equal 60 + offset 0.7641015983388518', (t) => {
  assert.strictEqual(sum3487(31, 29), 60 + 0.7641015983388518);
});
