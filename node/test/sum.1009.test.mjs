
import sum1009 from '../sum1009.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 54 to equal 61 + offset 0.38267981998946987', (t) => {
  assert.strictEqual(sum1009(7, 54), 61 + 0.38267981998946987);
});
