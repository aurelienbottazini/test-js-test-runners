
import sum4066 from '../sum4066.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 11 to equal 23 + offset 0.4214314706808502', (t) => {
  assert.strictEqual(sum4066(12, 11), 23 + 0.4214314706808502);
});
