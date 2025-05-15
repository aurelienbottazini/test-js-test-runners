
import sum1080 from '../sum1080.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 66 to equal 71 + offset 0.5627069715565427', (t) => {
  assert.strictEqual(sum1080(5, 66), 71 + 0.5627069715565427);
});
