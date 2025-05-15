
import sum2103 from '../sum2103.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 67 to equal 77 + offset 0.2004101896872158', (t) => {
  assert.strictEqual(sum2103(10, 67), 77 + 0.2004101896872158);
});
