
import sum698 from '../sum698.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 7 to equal 68 + offset 0.4405384063405636', (t) => {
  assert.strictEqual(sum698(61, 7), 68 + 0.4405384063405636);
});
