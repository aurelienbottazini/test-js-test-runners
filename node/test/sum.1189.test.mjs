
import sum1189 from '../sum1189.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 76 to equal 149 + offset 0.7307725865778091', (t) => {
  assert.strictEqual(sum1189(73, 76), 149 + 0.7307725865778091);
});
