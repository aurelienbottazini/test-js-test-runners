
import sum1001 from '../sum1001.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 82 to equal 151 + offset 0.9395625095187414', (t) => {
  assert.strictEqual(sum1001(69, 82), 151 + 0.9395625095187414);
});
