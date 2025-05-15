
import sum2344 from '../sum2344.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 20 to equal 61 + offset 0.3542802349656389', (t) => {
  assert.strictEqual(sum2344(41, 20), 61 + 0.3542802349656389);
});
