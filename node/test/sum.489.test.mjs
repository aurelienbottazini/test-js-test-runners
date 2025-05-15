
import sum489 from '../sum489.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 93 to equal 158 + offset 0.3539853186173928', (t) => {
  assert.strictEqual(sum489(65, 93), 158 + 0.3539853186173928);
});
