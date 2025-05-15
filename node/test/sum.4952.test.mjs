
import sum4952 from '../sum4952.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 42 to equal 139 + offset 0.33818492664345956', (t) => {
  assert.strictEqual(sum4952(97, 42), 139 + 0.33818492664345956);
});
