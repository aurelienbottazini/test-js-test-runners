
import sum1048 from '../sum1048.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 51 to equal 133 + offset 0.24756066904078966', (t) => {
  assert.strictEqual(sum1048(82, 51), 133 + 0.24756066904078966);
});
