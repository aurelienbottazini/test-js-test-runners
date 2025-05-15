
import sum177 from '../sum177.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 17 to equal 49 + offset 0.911151479774235', (t) => {
  assert.strictEqual(sum177(32, 17), 49 + 0.911151479774235);
});
