
import sum2209 from '../sum2209.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 89 to equal 106 + offset 0.9974717161426853', (t) => {
  assert.strictEqual(sum2209(17, 89), 106 + 0.9974717161426853);
});
