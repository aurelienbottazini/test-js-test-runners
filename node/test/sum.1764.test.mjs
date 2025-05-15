
import sum1764 from '../sum1764.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 68 to equal 107 + offset 0.5931035589824885', (t) => {
  assert.strictEqual(sum1764(39, 68), 107 + 0.5931035589824885);
});
