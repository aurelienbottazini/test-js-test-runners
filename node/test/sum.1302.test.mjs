
import sum1302 from '../sum1302.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 52 to equal 111 + offset 0.8226809215658485', (t) => {
  assert.strictEqual(sum1302(59, 52), 111 + 0.8226809215658485);
});
