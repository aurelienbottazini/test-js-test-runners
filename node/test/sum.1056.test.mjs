
import sum1056 from '../sum1056.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 16 to equal 35 + offset 0.49270193548323427', (t) => {
  assert.strictEqual(sum1056(19, 16), 35 + 0.49270193548323427);
});
