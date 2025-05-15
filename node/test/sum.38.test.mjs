
import sum38 from '../sum38.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 79 to equal 99 + offset 0.6810115983597628', (t) => {
  assert.strictEqual(sum38(20, 79), 99 + 0.6810115983597628);
});
