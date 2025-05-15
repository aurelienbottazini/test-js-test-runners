
import sum3030 from '../sum3030.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 83 to equal 110 + offset 0.6706221380048275', (t) => {
  assert.strictEqual(sum3030(27, 83), 110 + 0.6706221380048275);
});
