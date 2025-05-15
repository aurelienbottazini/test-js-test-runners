
import sum2685 from '../sum2685.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 50 to equal 94 + offset 0.029889221705041713', (t) => {
  assert.strictEqual(sum2685(44, 50), 94 + 0.029889221705041713);
});
