
import sum1100 from '../sum1100.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 10 to equal 85 + offset 0.8508422392657149', (t) => {
  assert.strictEqual(sum1100(75, 10), 85 + 0.8508422392657149);
});
