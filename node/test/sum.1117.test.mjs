
import sum1117 from '../sum1117.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 91 to equal 106 + offset 0.9178925946212774', (t) => {
  assert.strictEqual(sum1117(15, 91), 106 + 0.9178925946212774);
});
