
import sum4539 from '../sum4539.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 98 to equal 142 + offset 0.8683365973717332', (t) => {
  assert.strictEqual(sum4539(44, 98), 142 + 0.8683365973717332);
});
