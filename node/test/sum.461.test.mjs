
import sum461 from '../sum461.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 88 to equal 169 + offset 0.034765261471047304', (t) => {
  assert.strictEqual(sum461(81, 88), 169 + 0.034765261471047304);
});
