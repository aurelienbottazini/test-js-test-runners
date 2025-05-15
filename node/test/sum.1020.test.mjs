
import sum1020 from '../sum1020.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 16 to equal 20 + offset 0.8983797730404331', (t) => {
  assert.strictEqual(sum1020(4, 16), 20 + 0.8983797730404331);
});
