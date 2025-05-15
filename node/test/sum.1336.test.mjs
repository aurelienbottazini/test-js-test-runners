
import sum1336 from '../sum1336.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 65 to equal 124 + offset 0.5256199499062583', (t) => {
  assert.strictEqual(sum1336(59, 65), 124 + 0.5256199499062583);
});
