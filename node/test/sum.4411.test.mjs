
import sum4411 from '../sum4411.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 15 to equal 97 + offset 0.5051073407622091', (t) => {
  assert.strictEqual(sum4411(82, 15), 97 + 0.5051073407622091);
});
