
import sum1526 from '../sum1526.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 24 to equal 104 + offset 0.8818947153306995', (t) => {
  assert.strictEqual(sum1526(80, 24), 104 + 0.8818947153306995);
});
