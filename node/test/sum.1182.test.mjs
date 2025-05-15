
import sum1182 from '../sum1182.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 94 to equal 111 + offset 0.3007358992842337', (t) => {
  assert.strictEqual(sum1182(17, 94), 111 + 0.3007358992842337);
});
