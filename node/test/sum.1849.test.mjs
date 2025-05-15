
import sum1849 from '../sum1849.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 38 to equal 87 + offset 0.5021450054330975', (t) => {
  assert.strictEqual(sum1849(49, 38), 87 + 0.5021450054330975);
});
