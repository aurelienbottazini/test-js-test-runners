
import sum1562 from '../sum1562.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 44 to equal 97 + offset 0.747439907571923', (t) => {
  assert.strictEqual(sum1562(53, 44), 97 + 0.747439907571923);
});
